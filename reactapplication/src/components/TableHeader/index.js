import React from "react";

function TableHeader() {
        return(
            <div>
            <thead>
                <tr>
                <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            </div>
        );
}

export default TableHeader;