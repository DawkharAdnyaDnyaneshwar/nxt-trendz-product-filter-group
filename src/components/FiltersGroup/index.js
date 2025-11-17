import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    onChangeSearch,
    onSearchSubmit,
    onClickRating,
    onClickCategory,
    clearFilter,
    activeCategoryId,
    activeRatingId,
    searchInput,
  } = props

  const onPressEnter = event => {
    if (event.key === 'Enter') {
      onSearchSubmit()
    }
  }

  const onChangeSearchValue = event => {
    onChangeSearch(event.target.value)
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
        placeholder="Search"
        onKeyDown={onPressEnter}
        onChange={onChangeSearchValue}
      />
      <h2 className="filter-heading">Category</h2>
      <ul className="list">
        {categoryOptions.map(eachItem => (
          <li id={eachItem.categoryId} onClick={changeCategory}>
            <p
              className={
                eachItem.categoryId === activeCategoryId
                  ? 'list-item active'
                  : 'list-item'
              }
            >
              {eachItem.name}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="filter-heading">Rating</h2>
      <ul className="list">
        {ratingsList.map(eachItem => (
          <li id={eachItem.ratingId} onClick={changeRating}>
            <img
              src={eachItem.imageUrl}
              alt={`rating ${eachItem.ratingId}`}
              className="rating-img"
            />
            <p
              className={
                eachItem.ratingId === activeRatingId
                  ? 'list-item active'
                  : 'list-item'
              }
            >
              & up
            </p>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-filter-btn" onClick={onClickBtn}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
