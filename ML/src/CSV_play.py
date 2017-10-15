import pandas as pd


def create_training(path_to_csv):
    df = pd.read_csv(path_to_csv, engine='c')
    x_train, y_train = train_x(df), train_y(df)

    return x_train, y_train


def train_x(dataframe):
    x_train = dataframe.drop(['employed'], axis=1, inplace=False).as_matrix()

    return x_train


def train_y(dataframe):
    y_train = dataframe['employed'].as_matrix()

    return y_train
