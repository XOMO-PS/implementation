import os

MYSQL_URI_DEV = 'mysql://user:password@hostname/dbname'

MYSQL_URI_TEST = 'sqlite:///user.dbb'

MYSQL_URI = MYSQL_URI_TEST if os.getenv('TESTING') else MYSQL_URI_DEV