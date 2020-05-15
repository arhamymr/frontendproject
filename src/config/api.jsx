const HOST = "https://www.googleapis.com/blogger"
const SECRET_KEY = "AIzaSyDJymzqE90jcSw45Eek_Y1EBUuY_h0tgfk"
const BLOG_ID = "2100493342191057670"

export const API_GET_LIST_POST = `${HOST}/v3/blogs/${BLOG_ID}/posts?key=${SECRET_KEY}`
	
export const API_GET_DETAIL_POST = id => `${HOST}/v3/blogs/${BLOG_ID}/posts/${id}?key=${SECRET_KEY}`

export const API_SEARCH_POST = query => `${HOST}/v3/blogs/${BLOG_ID}/posts/search?q=${query}&key=${SECRET_KEY}`
	
