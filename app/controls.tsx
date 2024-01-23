import Select from "react-select"

type ControlProps = {
  handleSetField: (value: string | null) => void;
  handleSetDirection: (value: string ) => void;
}

const Controls: React.FC<ControlProps>= ({handleSetField, handleSetDirection}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" className="input" onChange={(selectedOption) => handleSetField(selectedOption.value)}/>
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(selectedOption) => handleSetDirection(selectedOption.value)}
        />
      </div>
    </div>
  );
};

export default Controls;
