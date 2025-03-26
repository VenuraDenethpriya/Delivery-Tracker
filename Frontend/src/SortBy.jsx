function SortBy() {
    return ( 
        <section>
            <div className="flex items-center space-x-2">
                <label htmlFor="sort-by">Filter By:</label>
                <select id="sort-by" name="sort-by" className="bg-slate-300 text-black px-2 py-1 rounded-md">
                    <option value="date">Date</option>
                    <option value="status">Status</option>
                    <option value="carrier">Carrier</option>
                </select>
            </div>
        </section>
     );
}

export default SortBy;