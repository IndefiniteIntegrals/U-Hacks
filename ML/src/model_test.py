from keras.models import load_model


def test_data(sample_point, uid):
	model = load_model('ML/model/{}.hd5'.format(uid))

	return (uid, model.predict(sample_point, batch_size=1))
