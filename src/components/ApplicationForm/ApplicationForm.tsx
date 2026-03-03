import React, { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import type { ApplicationFormProps, FormData } from "./types";
import styles from "./ApplicationForm.module.scss";
import VkIcon from "../../assets/vk.svg";
import YandexIcon from "../../assets/yandex.svg";

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  onSubmit,
  className,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "",
    choice: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const choices = ["Выбор 1", "Выбор 2", "Выбор 3", "Выбор 4", "Выбор 5"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChoiceSelect = (choice: string) => {
    setFormData((prev) => ({ ...prev, choice }));
    setIsDropdownOpen(false);
  };

  return (
    <section className={`${styles.applicationForm} ${className || ""}`}>
      <h2 className={styles.title}>Подача заявки</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Имя"
          />
        </div>

        <div className={styles.field}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="Почта"
          />
        </div>

        <div className={styles.field}>
          <span className={styles.label}>Пол:</span>
          <div className={styles.genderGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={() =>
                  setFormData((prev) => ({ ...prev, gender: "male" }))
                }
                className={styles.hiddenCheckbox}
              />
              <span
                className={`${styles.customCheckbox} ${formData.gender === "male" ? styles.checked : ""}`}
              />
              <span>Мужской</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={() =>
                  setFormData((prev) => ({ ...prev, gender: "female" }))
                }
                className={styles.hiddenCheckbox}
              />
              <span
                className={`${styles.customCheckbox} ${formData.gender === "female" ? styles.checked : ""}`}
              />
              <span>Женский</span>
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <span className={styles.label}>Выберите</span>
          <div className={styles.selectWrapper}>
            <button
              type="button"
              className={`${styles.selectButton} ${isDropdownOpen ? styles.open : ""}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{formData.choice || "Выбор"}</span>
              <KeyboardArrowDown className={styles.arrow} />
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {choices.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    className={styles.dropdownItem}
                    onClick={() => handleChoiceSelect(choice)}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Подать заявку
        </button>

        <div className={styles.alternative}>
          <span className={styles.alternativeText}>Другой способ</span>
        </div>

        <div className={styles.otherButtons}>
          <img
            src={YandexIcon}
            alt="yandex"
            className={`${styles.otherButton} ${styles.yandex}`}
          />
          <img
            src={VkIcon}
            alt="vk"
            className={`${styles.otherButton} ${styles.vk}`}
          />
        </div>
      </form>
    </section>
  );
};

export default ApplicationForm;