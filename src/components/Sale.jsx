import { useState } from "react";
// import InventoryTable from "./Inventory";

function SaleTable() {
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);

    const [users, setUsers] = useState([]);
    const [name, setName] = useState();
    const [person, setPerson] = useState();

    const [sum, setSum] = useState();

    function Calculation() {
        users.push({ name, person, qty, price, sum, });

        const total = users.reduce((total, user) => {
            total += Number(user.sum)
            return total
        }, 0);

        setTotal(total);

        setName('');
        setPerson('');
        setQty('');
        setPrice('');
        setSum('');
    }

    const handlePriceChange = (e) => {
        const newPrice = parseFloat(e.target.value);
        if (!isNaN(newPrice)) {
            setPrice(newPrice);
            calculateTotal(newPrice, qty);
        }
    };

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value)
        if (!isNaN(newQuantity)) {
            setQty(newQuantity);
            calculateTotal(price, newQuantity);
        }
    };
    const calculateTotal = (price, qty) => {
        const newTotal = price * qty;
        setSum(newTotal);
    };
    function refreshPage() {
        window.location.reload();
    }
    // const handleSale = () => {
    //     // Find the product in the inventory
    //     const product = InventoryTable.find((item) => item.name === productName);
    //     if (product) {
    //       product.qty -= parseInt(qty, 10);
    //     }
    //   };
    return (
        <div className="container-fluid text-center mb-5 mt-40">
          
            <br />
            <div className="row">
                <div className="ml-20">
                    <table className="text-left">
                        <h3 className="text-xl font-semibold mb-3" >Add Item</h3>
                        <tr>
                            <th>Product Name</th>
                            <th>Responsible Person</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                        <td>
                            <input type="text" className="form-control border rounded-lg mr-3" placeholder="Item Name" value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </td>
                        <td>
                            <input type="text" className="form-control border rounded-lg mr-3" placeholder="Seller Name" value={person}
                                onChange={(event) => {
                                    setPerson(event.target.value);
                                }}
                            />
                        </td>
                        <td>
                            <input type="text" className="form-control border rounded-lg mr-3" placeholder="Enter Price"
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </td>
                        <td>
                            <input type="text" className="form-control border rounded-lg mr-3" placeholder="Enter Qty"
                                value={qty}
                                onChange={handleQuantityChange}
                            />
                        </td>
                        <td>
                            <input type="text" value={sum} className="form-control border rounded-lg mr-3" placeholder="Enter Total" id="total_cost" name="total_cost" disabled />
                        </td>
                        <td>
                            <button type="submit" className="rounded-lg bg-teal-400 hover:bg-teal-500 pl-3 pr-3" onClick={Calculation}>Add</button>
                        </td>

                    </table>
                    <div className="row">
                        <div className="col-sm-8">
                        
                        <h3 className="text-left text-xl font-semibold mb-4  mt-10">Items</h3>
                        <table className=" border border-gray-200 " style={{ width: "calc(100% - 196px)"}}>
                            <thead>
                            <tr className="bg-gray-100">
                        <th className="px-4 py-2">Item Name</th>
                        <th className="px-4 py-2">Responsible Person</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Qty</th>
                        <th className="px-4 py-2 ">Amount</th>
                    </tr>
                            </thead>
                           
                            <tbody>
                                {users.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-4 py-2">{row.name}</td>
                                        <td className="px-4 py-2">{row.person}</td>
                                        <td className="px-4 py-2">{row.price}</td>
                                        <td className="px-4 py-2">{row.qty}</td>
                                        <td className="px-4 py-2">{row.sum}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group mt-10 " >
                        <h3>Total</h3>
                        <input type="text" className="form-control bg-gray-200 rounded-lg" placeholder="Enter Total" required disabled
                            value={total} />
                        <br />
                        <button type="button" onClick={refreshPage} className="rounded-lg bg-teal-400 hover:bg-teal-500 pl-2 pr-2 mt-10" ><span >Complete</span></button>
                    </div>
                    </div>
                </div>
            </div>
            )
}
            export default SaleTable;


            