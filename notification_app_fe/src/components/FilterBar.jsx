function FilterBar({
  selectedType,
  setSelectedType,
}) {
  return (
    <select
      value={selectedType}
      onChange={(e) =>
        setSelectedType(
          e.target.value
        )
      }
    >
      <option value="all">
        All
      </option>

      <option value="Event">
        Event
      </option>

      <option value="Result">
        Result
      </option>

      <option value="Placement">
        Placement
      </option>
    </select>
  );
}

export default FilterBar;