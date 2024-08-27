import React, {useState, useEffect} from 'react'

// CRUD: Read

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const request = await fetch(`https://jsonplaceholder.typicode.com/posts`),
                        response = await request.json();
                        
                        setPosts(response)

            } catch(err){
                console.log(err);
            }
            
        })();
    }, [])

  return posts.length ? <ul>{posts.map(item => <li key={item.id}>{item.title}</li>)}</ul> : null;
}