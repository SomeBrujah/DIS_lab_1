import React, { useCallback, useEffect, useState } from 'react';

function App(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        await fetch(`/books?filter=${query}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result.books);
            });
        setLoading(false);
    }, [query])
    return (
        <div>
          <h2>Hello</h2>
          <div
            style={{
                display: 'flex',
                gap: '10px',
            }}
          >
              <label htmlFor="Books">Search books</label>
              <input
                  onChange={e => {setQuery(e.target.value)}}
                  name="Books"
                  type="text"
                  placeholder="For example 'r'"
              />
              <button onClick={handleSubmit}>Submit</button>
          </div>
            <h2>List of books</h2>
            {data && data.map(item => <h3>{item}</h3>)}
        </div>
    );
}

export default App;
