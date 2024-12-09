import React, { useState, ChangeEvent } from "react";
import './ImageInput.scss'
import { Flex } from "@mantine/core";
import inputIcon from "../../../assets/image-input-icon.svg";

interface ProfileImageInputProps {
  defaultImage?: string;
  onChange?: (file: File | null) => void;
}

const ImageInput: React.FC<ProfileImageInputProps> = ({ defaultImage, onChange }) => {
  const [preview, setPreview] = useState<string | null>(defaultImage || null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        if(onChange){
            onChange(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

//   const handleRemove = () => {
//     setPreview(defaultImage || null);
//     if(onChange){
//         onChange(null);
//     }
//   };

  return (
    <div className="imageInput">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="native-image-input"
      />
      <label
        htmlFor="native-image-input"
        className="imageInput-customInput"
      >
            <div className="imageInput-customInputContainer">
                {preview ? (
                    <img
                        src={preview}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    ) : (
                    <Flex align='center' justify='center' w='100%' h='100%' className="imageInput-noImage">
                        <img src={inputIcon} alt="Добавить" width={28} height={23}/>
                    </Flex>
                )}
            </div>      
      </label>
    </div>
  );
};

export default ImageInput;
