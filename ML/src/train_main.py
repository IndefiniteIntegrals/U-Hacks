from CSV_play import create_training
from model_train import train_model
import os
import argparse


def get_args():
    parser = argparse.ArgumentParser(description="Tarvitsen Tyota Application's trainer.")
    parser.add_argument('-id',type=str,help='Unique Id for Model',required=True)
    parser.add_argument('-f',type=str,help='Filename of csv',required=True)
    args = parser.parse_args()
    return args


args = get_args()
file_location = 'ML/csv/{}'.format(args.f)
models = os.listdir('ML/model')

x_train, y_train = create_training(file_location)

exists = '{}.hd5'.format(args.id) in models
train_model(x_train, y_train, args.id, exists)
