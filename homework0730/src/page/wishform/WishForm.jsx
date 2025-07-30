import { useState, useEffect } from "react";

const WishForm = () => {
const [form, setForm] = useState({
itemName: "",
price: "",
category: ""
});

const [wishList, setWishList] = useState([]);

useEffect(() => {
    const saved = localStorage.getItem("wishList");
    if (saved) {
        setWishList(JSON.parse(saved));
    }}, []);

useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
    }, [wishList]);

const handleChange = (evt) => {
const { name, value } = evt.target;
    setForm(data => ({ ...data, [name]: value }));
};

const handleSubmit = (evt) => {
    evt.preventDefault();
    const newItem = {
        ...form
};

setWishList(prev => [...prev, newItem]);

setForm({ itemName: "", price: "", category: "" });
};

return (
    <>
        <form className="wish-form" onSubmit={handleSubmit}>
        <input
            type="text"
            name="itemName"
            placeholder="위시템 이름"
            value={form.itemName}
            onChange={handleChange}
            required
        />
        <input
            type="number"
            name="price"
            placeholder="가격"
            value={form.price}
            onChange={handleChange}
            required
        />
        <input
            type="text"
            name="category"
            placeholder="카테고리"
            value={form.category}
            onChange={handleChange}
        />
        <button type="submit">추가</button>
        </form>

        <br />

        <h2>현재 위시리스트</h2>
        <br />
        <table className="wish-table">
        <thead>
            <tr>
            <th>위시템</th>
            <th>가격 (원)</th>
            <th>카테고리</th>
            </tr>
        </thead>
        <tbody>
            {wishList.map((item, index) => (
            <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
            </tr>
            ))}
        </tbody>
        </table>

        <br />
        </>
    );
};

export default WishForm;