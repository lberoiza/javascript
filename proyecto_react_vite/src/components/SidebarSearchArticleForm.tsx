import { FormEvent, useState, createRef } from 'react';
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";

const SidebarSearchArticleForm = () => {
  const [searchStatus, setSearchStatus] = useState('');
  const navigate = useNavigateWithTransitions();
  const searchRef = createRef<HTMLInputElement>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchStatus && searchStatus?.trim().length > 0) {
      navigate(`/search/${searchStatus.trim()}`);
    }
    searchRef.current?.select();
  };

  return (
    <div className="sidebar-item"
         style={{viewTransitionName: `sidebar-search-article-form`}}
    >
      <h3>Search</h3>
      <p>Find the article you want</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchStatus}
          id="search-input-text"
          ref={searchRef}
          placeholder="write the article title here ..."
          onChange={(e) => setSearchStatus(e.target.value)} />
        <button type="submit" value="Buscar" name="submit" id="search-btn-submit" className="btn">Search</button>
      </form>
    </div>
  );
};

export default SidebarSearchArticleForm;