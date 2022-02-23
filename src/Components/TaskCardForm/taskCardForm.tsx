import React, { useState } from "react";
import Button from "../Button/button";
import styles from "./taskCardForm.module.scss";

const TaskCardForm = () => {
    const [categories, changeCategories] = useState<string[]>([]);
    const [isFormVisible, changeVisible] = useState<boolean>(false);
    const [categoryName, changeCategoryName] = useState<string>("");

    const handleChangeVisibilityClick = () => changeVisible(!isFormVisible);

    const handleAddCategoryClick = (categoryName: string) => () =>
        changeCategories([...categories, categoryName]);

    const handleChangeCategoryName = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => changeCategoryName(event.target.value);

    const handleDeleteCategory = (categoryName: string) => () =>
        changeCategories(
            categories.filter((category) => category !== categoryName)
        );
    return (
        <div className={styles.container}>
            <div className={styles.header}>Create New Card</div>
            <div className={styles.input}>
                <textarea placeholder="What is the task?" />
            </div>
            <div className={styles.categories}>
                <div
                    className={styles.add}
                    onClick={handleChangeVisibilityClick}
                ></div>
                <div className={styles.categoryList}>
                    {categories.map((category) => (
                        <div
                            className={styles.category}
                            key={category}
                            onClick={handleDeleteCategory(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div
                    className={`${styles.form} ${
                        isFormVisible ? styles.visible : ""
                    }`}
                >
                    <input
                        type="text"
                        placeholder="Type category"
                        value={categoryName}
                        onChange={handleChangeCategoryName}
                    />
                    <button onClick={handleAddCategoryClick(categoryName)}>
                        Add
                    </button>
                </div>
            </div>
            <Button text="Done" />
        </div>
    );
};

export default TaskCardForm;
