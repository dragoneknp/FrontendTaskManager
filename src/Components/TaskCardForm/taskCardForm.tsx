import React, { useState } from "react";
import { useLoading } from "../../Hooks/useLoading";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import { postCategory } from "../../Store/ActionCreators/postCategoryAction";
import { postTask } from "../../Store/ActionCreators/postTaskAction";
import { addTask } from "../../Store/selectors";
import Button from "../Button/button";
import styles from "./taskCardForm.module.scss";

const TaskCardForm = () => {
    const [tags, changeTags] = useState<string[]>([]);
    const [category, changeCategory] = useState<string>("");
    const [isTagFormVisible, changeTagVisible] = useState<boolean>(false);
    const [isCategoryFormVisible, changeCategoryVisible] =
        useState<boolean>(false);
    const [tagName, changeTagName] = useState<string>("");
    const [categoryName, changeCategoryName] = useState<string>("");
    const [inputText, changeInput] = useState<string>("");

    const dispatch = useAppDispatch();
    const { isLoading, error, isSuccess } = useAppSelector(addTask);

    const [load] = useLoading();

    const handleChangeTagVisibilityClick = () =>
        changeTagVisible(!isTagFormVisible);

    const handleChangeCategoryVisibilityClick = () =>
        changeCategoryVisible(!isCategoryFormVisible);

    const handleAddTagClick = (tagName: string) => () =>
        changeTags([...tags, tagName]);

    const handleAddCategoryClick = (categoryName: string) => () =>
        changeCategory(categoryName);

    const handleTextAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => changeInput(event.target.value);

    const handleTagNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.value.length <= 16) {
            changeTagName(event.target.value);
        } else {
            // create some logic to inform user
            alert("You cannot add tag with more than 16 symbols");
        }
    };

    const handleCategoryNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.value.length <= 32) {
            changeCategoryName(event.target.value);
        } else {
            // create some logic to inform user
            alert("You cannot add category with more than 32 symbols");
        }
    };

    const handleDeleteTag = (tagName: string) => () =>
        changeTags(tags.filter((tag) => tag !== tagName));

    const handleDeleteCategory = () => () => changeCategory("");

    const handleAddTaskClick =
        (tags: string[], category: string, text: string) => () => {
            if (tags.length > 0 && category != "") {
                dispatch(postTask({ text, tags, category }));
                dispatch(postCategory(category));
                changeTags([]);
                changeInput("");
                changeTagVisible(false);
                changeTagName("");
                changeCategory("");
                changeCategoryVisible(false);
                changeCategoryName("");
            } else {
                // create some logic to inform user
                alert(
                    "You cant create new card without Category and at least one tag"
                );
            }
        };

    return (
        <div className={styles.container}>
            <div className={styles.header}>Create New Card</div>
            <div className={styles.input}>
                <textarea
                    placeholder="What is the task?"
                    value={inputText}
                    onChange={handleTextAreaChange}
                />
            </div>
            <div className={styles.tags}>
                <div
                    className={styles.add}
                    onClick={handleChangeTagVisibilityClick}
                ></div>
                <div className={styles.tagsList}>
                    {tags.map((tag, index) => (
                        <div
                            className={styles.tag}
                            key={`${tag}_${index}`}
                            onClick={handleDeleteTag(tag)}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div
                    className={`${styles.form} ${
                        isTagFormVisible ? styles.visible : ""
                    }`}
                >
                    <input
                        type="text"
                        placeholder="Type tags"
                        value={tagName}
                        onChange={handleTagNameChange}
                    />
                    <button onClick={handleAddTagClick(tagName)}>Add</button>
                </div>
            </div>
            <div className={styles.categories}>
                <div
                    className={styles.add}
                    onClick={handleChangeCategoryVisibilityClick}
                ></div>
                {category ? (
                    <div
                        className={styles.category}
                        onClick={handleDeleteCategory()}
                    >
                        {category}
                    </div>
                ) : (
                    ""
                )}

                <div
                    className={`${styles.form} ${
                        isCategoryFormVisible ? styles.visible : ""
                    }`}
                >
                    <input
                        type="text"
                        placeholder="Type Category"
                        value={categoryName}
                        onChange={handleCategoryNameChange}
                    />
                    <button onClick={handleAddCategoryClick(categoryName)}>
                        Add
                    </button>
                </div>
            </div>
            <Button
                handleClick={handleAddTaskClick(tags, category, inputText)}
                text="Done"
            />
        </div>
    );
};

export default TaskCardForm;
