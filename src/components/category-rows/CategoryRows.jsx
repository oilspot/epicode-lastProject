import React from "react";
import { getCategory } from "../../functions/getCategories";
import { Link } from "react-router-dom";

export default function CategoryRows(props) {
    return (
        <>
            <li><Link to={`/categories/${props.category.id}/posts`} className="dropdown-item">{ props.category.name }</Link></li>
        </>
    );
}
