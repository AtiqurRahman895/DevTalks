import Select from "react-select";

function SelectTags({selectedTags, setSelectedTags}) {
    const tags = [
        { label: "javascript", value: "javascript" },
        { label: "html", value: "html" },
        { label: "react", value: "react" },
        { label: "go", value: "go" },
    ];

  return (

    <Select name="tags" id="tags" options={tags} isSearchable isMulti required
        onChange={(selectedTags)=>setSelectedTags(selectedTags)} value={selectedTags} placeholder={'Select tags...'} className="!z-20"
        styles={{
            control:(base)=>({
                ...base,
                fontSize:"14px",
                padding:"0.4rem",
                border:"none",
                borderRadius:"5px",
                "&:hover": {
                    border: "none", // Change border color on hover
                    boxShadow:"none"
                },
            }),
            multiValue:(base)=>({
                ...base,
                color:"black",
                // border: "1px solid black",
            }),
            option:(base,state)=>({
                ...base,
                backgroundColor:state.isFocused||state.isSelected?"#76758226":"transparent",
                color:'black',
            }),
        }}
    >
    </Select>
  )
}

export default SelectTags;