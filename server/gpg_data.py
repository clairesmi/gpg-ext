import pandas as pd
import json

# commented out lines are for generating the json version of the data for the AWS bucket upload

def get_data():
    df = pd.read_csv('https://gender-pay-gap.service.gov.uk/viewing/download-data/2021')
    df_to_json = df.to_json(orient='records')
    # df_to_json = df.to_json(r"C:\Users\clairesmith\Desktop\Export_DataFrame.json", orient='records')

    return json.loads(df_to_json)

# get_data()