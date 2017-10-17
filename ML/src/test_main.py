import pymongo
from pymongo import MongoClient
import numpy as np
import model_test
import argparse


def get_args():
    parser = argparse.ArgumentParser(description="Tarvitsen Tyota Application's Parser.")
    parser.add_argument('-id',type=str,help='Unique Id for Model',required=True)
    args = parser.parse_args()
    return args.id

def get_latest_ping(uid):
	table = db.employee

	cursor = table.find({'uniqueid' : uid})
	doc = []
	for document in cursor:
		skills = document['skills'].replace(':', ',').split(',')
		doc = [document['pos'],
			document['exp'],
			document['loc'],
			document['college'],
			skills[0],
			skills[2],
			skills[4],
			skills[6],
			skills[8],
			skills[1],
			skills[3],
			skills[5],
			skills[7],
			skills[9]
			]

	print(doc)

	return doc


def get_same_vacancy(vacancy):
	table = db.model

	cursor = table.find({'jobprofile' : vacancy.lower()})
	uids = set([document['recmail'] for document in cursor])

	print(uids)

	return uids


def get_diff_vacancy(vacancy):
	table = db.model

	cursor = table.find({'jobprofile' : {'$ne' : vacancy.lower()}})
	uids = set([document['recmail'] for document in cursor])

	print(uids)

	return uids


def database_entries(table_name, same, prob):
	table = db[table_name]
	if same:
		entry = {'recmail' : prob[0], 'prob' : float("{:.2f}".format(prob[1][0][0])), 'similar' : 'y', 'comp_name' : get_name(prob[0])}
	else:
		entry = {'recmail' : prob[0], 'prob' : float("{:.2f}".format(prob[1][0][0])), 'similar' : 'n', 'comp_name' : get_name(prob[0])}

	try :
		table.insert_one(entry)
	except pymongo.errors.DuplicateKeyError:
		print("Error")


def get_name(recmail):
	table = db.model

	cursor = table.find({'recmail' : recmail})
	return list(set([document['recname'] for document in cursor]))[0]



client = MongoClient()
db = client['mydb']
first_uid = get_args()
sample = np.array([get_latest_ping(first_uid)])

uids = get_same_vacancy(sample[0][0])
probs = [model_test.test_data(sample, uid) for uid in uids]

for prob in probs:
	database_entries(first_uid, True, prob)

uids = get_diff_vacancy(sample[0][0])
probs = [model_test.test_data(sample, uid) for uid in uids]

for prob in probs:
	database_entries(first_uid, False, prob)

