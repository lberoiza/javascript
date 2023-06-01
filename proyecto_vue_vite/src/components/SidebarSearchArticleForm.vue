<!-- funcion por definir -->

<template>
  <div id="search" class="sidebar-item">
    <h3>Buscador</h3>
    <p>Encuentra el articulo que buscas</p>
    <!-- <form onSubmit={handleSubmit}> -->
      <form>
      <!-- <input type="text" name="search" value={searchStatus} id="search-input-text" ref={searchRef} onChange={(e)=>
      setSearchStatus(e.target.value)} /> -->
      <button type="submit" value="Buscar" name="submit" id="search-btn-submit" class="btn">Search</button>
    </form>
  </div>
</template>