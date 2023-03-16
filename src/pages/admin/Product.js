
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Jumbotron from '../../components/cards/Jumbotron';
import AdminMenu from '../../components/nav/AdminMenu';

const Product = () => {

    const [categories, setCategories] = useState([]);
    const [photo, setPhoto] = useState("");

    useEffect(() => {

        loadCategories()



    }, [])

    const loadCategories = async () => {
        try {
            const { data } = await axios.get("/categories");
            setCategories(data);

            console.log(data)
        } catch (err) {
            console.log(err);
        }
    };


    const hundleCreateProduct = async (e) => {

        e.preventDefault();

        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const shipping = e.target.shipping.value;
        const description = e.target.description.value;
        const name = e.target.name.value;

        console.log(photo)

        try {
            const productData = new FormData();
            productData.append("photo", photo);
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("category", category);
            productData.append("shipping", shipping);
            productData.append("quantity", quantity);

            const { data } = await axios.post('/product', productData)

            if (data?.error) {

                toast.error('cannot create catagory')

            } else {
                toast.success(`${data.name} created successfully`);

            }

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <Jumbotron title="Hellow World" subTitle='Welcome to admin product page'></Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                        <AdminMenu></AdminMenu>

                    </div>
                    <div className="col-md-9">
                        <div className="">create product</div>

                        <form onSubmit={hundleCreateProduct}>


                            {photo && (
                                <div className="text-center">
                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt="product photo"
                                        className="img img-responsive"
                                        height="200px"
                                    />
                                </div>
                            )}


                            <input
                                type="text"
                                className="form-control p-2 mb-3"
                                placeholder="Write a name"
                                name="name"
                            // value='name'
                            //   onChange={(e) => setName(e.target.value)}


                            />

                            <div className="pt-2">
                                <label className="btn btn-outline-secondary col-12 mb-3">
                                    {photo ? photo.name : "Upload photo"}
                                    <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                        hidden
                                    />
                                </label>
                            </div>

                            <textarea
                                type="text"
                                className="form-control p-2 mb-3"
                                placeholder="Write a description"
                                name='description'
                            // value={description}
                            // onChange={(e) => setDescription(e.target.value)}
                            />


                            <input
                                type="number"
                                className="form-control p-2 mb-3"
                                placeholder="Enter price"
                                name='price'
                            // value={price}
                            // onChange={(e) => setPrice(e.target.value)}
                            />


                            <select

                                name="category">
                                {
                                    categories.map((c) => <option value={c._id}>{c.name}</option>
                                    )
                                }

                            </select>


                            <br></br>

                            <label className="p-2">Choose shipping</label>

                            <select
                                name='shipping'
                                placeholder='choose shipping'

                            >


                                <option value="0">No</option>
                                <option value="1">Yes</option>

                            </select>





                            <input
                                type="number"
                                min="1"
                                className="form-control p-2 mb-3"
                                placeholder="Enter quantity"
                                name='quantity'
                            //   value={quantity}
                            //   onChange={(e) => setQuantity(e.target.value)}
                            />

                            <button type="submit" className="btn btn-primary mb-5">
                                Submit
                            </button>



                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;