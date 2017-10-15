from keras.models import Sequential, load_model
from keras.layers import Dense, Dropout


def create_model():
    model = Sequential()

    model.add(Dense(32, activation='relu', input_dim=14))
    model.add(Dropout(0.25))

    model.add(Dense(32, activation='relu'))
    model.add(Dropout(0.25))

    model.add(Dense(1, activation='sigmoid'))

    return model


def train_model(x, y, uid, exists):
    if not exists:
        model = create_model()
        model.compile(optimizer='adam', loss='mean_squared_error', metrics=['accuracy'])
    else:
        model = load_model('ML/model/{}.hd5'.format(uid))

    model.fit(x, y, batch_size=32, epochs=10, verbose=2)

    model.save('ML/model/{}.hd5'.format(uid))
