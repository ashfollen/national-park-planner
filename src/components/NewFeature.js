function NewFeature() {
    return(
        <div>
            <p>Start Date:</p>
            <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate} 
                onChange={date => setStartDate(date)}
            />
            <p>End Date:</p>
            <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={date => setEndDate(date)}
            />
   </div>
    )
}

export default NewFeature;
