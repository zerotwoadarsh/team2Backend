import praw
from pymongo import MongoClient
import json

# Initialize Reddit API client
reddit = praw.Reddit(
    client_id='KquFl48lROOeU8rWBpS3mg',       # Replace with your client ID
    client_secret='GfrEDlI1ZlKfJ9yRf6deBeSioS6PMQ', # Replace with your client secret
    user_agent='YOUR_USER_AGENT'       # Replace with your user agent
)

# Initialize MongoDB client
mongo_client = MongoClient('mongodb+srv://admin:ronakraj1@cluster0.bjksk03.mongodb.net/cyberwatch?retryWrites=true&w=majority')
db = mongo_client['cyberwatch']         # Replace with your database name
collection = db['reddit_posts']   # Replace with your collection name

def fetch_and_store_reddit_data(keyword, limit=100):
    # Search for posts related to the keyword
    search_results = reddit.subreddit('all').search(keyword, limit=limit)
    
    for post in search_results:
        # Check if the post's title or selftext mentions "India"
        if "India" in post.title or "India" in post.selftext:
            post_data = {
                'title': post.title,
                'score': post.score,
                'id': post.id,
                'url': post.url,
                'num_comments': post.num_comments,
                'created': post.created_utc,
                'body': post.selftext
            }

            # Insert the post data into MongoDB if not already present
            if collection.find_one({'id': post_data['id']}) is None:
                collection.insert_one(post_data)
                print(f'Inserted post: {post.title}')
            else:
                print(f'Duplicate post found, skipping: {post.title}')

if __name__ == '__main__':
    fetch_and_store_reddit_data('cyber crime')
