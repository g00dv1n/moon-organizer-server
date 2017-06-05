import csv
import json
import os
import re
import pycountry


class WikidataParser:

    def __init__(self, file_path):
        self.csv = open(file_path)

    def __str__(self):
        return 'file_path={} file_type={}' \
            .format(self.file_path, self.file_type)

    # Point(Long Lat)
    # Point(Долгота Широта)
    def _point_normalize(self, point_str: str) -> dict:
        m = re.search('Point\((.*) (.*)\)', point_str)
        return {
            'longitude': m.group(1),
            'latitude': m.group(2)
        }

    def _id_normalize(self, id: str) -> str:
        return id.split('/')[-1]

    def to_dicts(self):
        cities = {}
        countries = {}
        reader = csv.DictReader(self.csv)
        for row in reader:
            key = self._id_normalize(row.get('city'))
            country = self._id_normalize(row.get('country'))
            try:
                coord = self._point_normalize(row.get('coord'))
                #if lookup_country: 
                #    country_code = pycountry.countries.lookup('ukraine').alpha_2
            except:
                break
            cities[key] = {
                'name': row.get('cityLabel'),
                'country': country,
                'longitude': coord.get('longitude'),
                'latitude': coord.get('latitude')
            }
            if country not in countries:
                countries[country] = {
                    'name': row.get('countryLabel')
                }
        return cities, countries


def save_dict_to_json(dict, out_name):
    json.dump(dict, open(out_name, 'w'), sort_keys=True, indent=4, ensure_ascii=False)


def gen_lang_dicts(lang):
    p = WikidataParser('wikidata/cities_{}.csv'.format(lang))
    return p.to_dicts()


def gen_jsons(langs=['ru']):
    main_lang = 'en'
    main_cities, main_countries = gen_lang_dicts('en')
    ru_cities, ru_countries = gen_lang_dicts('ru')
    countries_with_codes = {}
    countries_with_codes_list = []
    cities_list = []
    russia = {
        'en': 'Russia',
        'ru': 'Россия',
        'code': 'RU'
    }

    # create list of countries
    for c in main_countries:
        name = main_countries[c]['name']
        try:
            code = pycountry.countries.lookup(name).alpha_2
            r = {
                'en': name,
                'ru': ru_countries[c]['name'],
                'code': code
            }
            countries_with_codes[c] = r
            countries_with_codes_list.append(r)
        except:
            if name == 'Russia':
                countries_with_codes[c] = russia
                countries_with_codes_list.append(russia)
                pass

    # create list of cities with country code
    for city_key in main_cities:
        country_key = main_cities[city_key]['country']
        if country_key in countries_with_codes:
            ru_name = ru_cities[city_key]['name']
            if ru_name == city_key:
                ru_name = None
            city = {
                'country': countries_with_codes[country_key].get('code'),
                'defaultName': main_cities[city_key]['name'],
                'ru': ru_name,
                'en': main_cities[city_key]['name'],
                'longitude': main_cities[city_key]['longitude'],
                'latitude':  main_cities[city_key]['latitude']
            }
            cities_list.append(city)

    save_dict_to_json(cities_list, 'cities.json')
    save_dict_to_json(countries_with_codes_list, 'countries.json')

    print('Save countries: ', len(countries_with_codes_list))
    print('Save cities: ', len(cities_list))


if __name__ == '__main__':
    gen_jsons()

