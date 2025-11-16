import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    onChangeSearch,
    onClickRating,
    onClickCategory,
    clearFilter,
    activeCategoryId,
    activeRatingId,
    searchInput,
  } = props

  const changeSearchValue = event => {
    onChangeSearch(event)
  }

  const changeCategory = event => {
    onClickCategory(event.currentTarget.id)
  }

  const changeRating = event => {
    onClickRating(event.currentTarget.id)
  }

  const onClickBtn = () => {
    clearFilter()
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="input-el"
        value={searchInput}
        onChange={changeSearchValue}
      />
      <h2 className="filter-heading">Category</h2>
        <ul className="list">
          {categoryOptions.map(eachItem => (
            <li
              id={eachItem.categoryId}
              className={
                eachItem.categoryId === activeCategoryId
                  ? 'list-item active'
                  : 'list-item'
              }
              onClick={changeCategory}
            >
              {eachItem.name}
            </li>
          ))}
        </ul>
        <h2 className="filter-heading">Rating</h2>
        <ul className="list">
          {ratingsList.map(eachItem => (
            <li
              id={eachItem.ratingId}
              className={
                eachItem.ratingId === activeRatingId ? 'list-item active' : 'list-item'
              }
              onClick={changeRating}
            >
              <img
                src={eachItem.imageUrl}
                alt="rating"
                className="rating-img"
              />
              <p>&up</p>
            </li>
          ))}
        </ul>
      <button type="button" className="cear-filter-btn" onClick={onClickBtn}>Clear Filter</button>
    </div>
  )
}

export default FiltersGroup
