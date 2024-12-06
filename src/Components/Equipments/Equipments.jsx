

import React from "react";
import Equipment from "../Equipment/Equipment";

const Equipments = ({ equipments }) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-4">
                Equipment List
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="p-4 text-sm">Name</th>
                            <th className="p-4 text-sm">Price</th>
                            <th className="p-4 text-sm">Category</th>
                            <th className="p-4 text-sm">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((equip) => (
                            <Equipment key={equip._id} equip={equip} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Equipments;
