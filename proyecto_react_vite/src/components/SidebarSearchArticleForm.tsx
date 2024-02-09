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
    <div id="search" className="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el articulo que buscas</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" value={searchStatus} id="search-input-text" ref={searchRef} onChange={(e) => setSearchStatus(e.target.value)} />
        <button type="submit" value="Buscar" name="submit" id="search-btn-submit" className="btn">Search</button>
      </form>
    </div>
  );
};

export default SidebarSearchArticleForm;