import numpy as np
import pandas as pd


data = [[np.random.randint(100),
         np.random.randint(41),
         np.random.randint(100),
         np.random.randint(100),
         np.random.randint(100),
         np.random.randint(100),
         np.random.randint(100),
         np.random.randint(100),
         np.random.randint(100),
         np.random.randint(6),
         np.random.randint(6),
         np.random.randint(6),
         np.random.randint(6),
         np.random.randint(6),
         np.random.randint(1, 3)
         ] for __ in range(10000)]

header = ['job_vacancy',
            'experience',
            'location',
            'college',
            'skill1',
            'skill2',
            'skill3',
            'skill4',
            'skill5',
            'level1',
            'level2',
            'level3',
            'level4',
            'level5',
            'employed'
            ]

df = pd.DataFrame(np.array(data))
df.to_csv('../csv/new.csv', header=header, index=False)