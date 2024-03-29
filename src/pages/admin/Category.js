import { useState, useEffect } from "react";

import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import CategoryForm from "../../components/forms/CategoryForm";
import { useAuth } from "../../components/contex/auth";
import { Modal } from "antd";



const AdminCategory = () => {
    // context
    const [auth, setAuth] = useAuth();
    // state
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatingName, setUpdatingName] = useState("");

    useEffect(() => {
        loadCategories();

    }, []);

    const loadCategories = async () => {
        try {
            const { data } = await axios.get("/categories");
            setCategories(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/createCategory", { name });

            if (!data) {
                toast.success("Category created failed");
            } else {
                loadCategories();
                setName("");
                toast.success(`${data.name} is created`);
            }
        } catch (err) {

            toast.error("Create category failed. Try again.");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`/updateCategory/${selected._id}`, {
                name: updatingName

            });
            loadCategories();

            if (data) {
                toast.success("category updated successfully")

            }

        } catch (error) {
            toast.error("something went wrong")
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        try {

            const { data } = await axios.delete(`/remove/${selected._id}`)
            loadCategories();
            if (data?.error) {
                toast.error("Cannot be deleted")
            } else {
                toast.success(`${selected.name} deleted successfully`)
            }

        } catch (error) {
            toast.error("something went wrong");
        }


    }




    return (
        <>
            <Jumbotron
                title={`Hello ${auth?.user?.name}`}
                subTitle="Admin Dashboard"
            />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="p-3 mt-2 mb-2 h4 bg-light">Manage Categories</div>

                        <CategoryForm
                            value={name}
                            setValue={setName}
                            handleSubmit={handleSubmit}
                        />

                        <hr />

                        <div className="col">
                            {categories?.map((c) => (
                                <button
                                    key={c._id}
                                    className="btn btn-outline-primary m-3"
                                    onClick={() => {
                                        setVisible(true);
                                        setSelected(c);
                                        setUpdatingName(c.name);
                                    }}
                                >
                                    {c.name}
                                </button>
                            ))}
                        </div>

                        <Modal

                            open={visible}
                            onOk={() => setVisible(false)}
                            onCancel={() => setVisible(false)}
                            footer={null}

                        >

                            <CategoryForm
                                value={updatingName}
                                setValue={setUpdatingName}
                                handleSubmit={handleUpdate}
                                buttonText="Update"
                                handleDelete={handleDelete}
                            />

                        </Modal>


                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminCategory;
