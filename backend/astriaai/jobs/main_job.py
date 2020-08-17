import datetime

from django.conf import settings
from apscheduler.schedulers.background import BackgroundScheduler


scheduler = BackgroundScheduler()

# start the scheduler
scheduler.start()

print(f"Scheduler started at {datetime.datetime.now()}")
