import React, { useCallback, useEffect, useState } from 'react';

function App(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        await fetch(`/books?filter=${query}`)
            .then(res => res.json())
            .then(result => setData(result.books));
        setLoading(false);
    }, [query])
    return (
        <div>
          <h2>Hello</h2>
          <form
              onSubmit={handleSubmit}
          >
              <input onChange={e => {setQuery(e.target.value)}} name="Books" type="text" />
              <label htmlFor="Books">Search</label>
          </form>

        </div>
    );
}

export default App;
