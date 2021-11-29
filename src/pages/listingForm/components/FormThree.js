import Paper from '../../../components/Paper/index';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep, handleFormProfile } from '../../../store/formStepSlice';
import Dropzone, { useDropzone } from 'react-dropzone';
import dropZoneLine from '../../../assets/RectUpload.png';
import { storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import './css/style.css';

const FormThree = () => {
    const [imagePreview, setImagePreview] = useState({ files: '' });
    const [progress, setProgress] = useState(0);

    const dispatch = useDispatch();
    let formDatas = useSelector((state) => state.formStep.formValue);

    const nextSubmit = (e) => {
        e.preventDefault();
        dispatch(nextStep());
    };

    useEffect(() => {
        if (formDatas != '') {
            setImagePreview({ files: formDatas.profile_images });
        }
    }, []);

    // ondrop uplaod it to firebase, and set link to input !
    const onDrop = (files) => {
        console.log(files[0]);
        const storageRef = ref(storage, `images/${files[0]?.name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    dispatch(handleFormProfile(downloadURL));
                });
            }
        );
        setImagePreview(files);
    };
    const previousSubmit = (e) => {
        e.preventDefault();
        dispatch(previousStep());
    };

    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
    });

    const files = <li key={imagePreview[0]?.name}>{imagePreview[0]?.name}</li>;

    return (
        <Paper className="rounded-3">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFullname">
                    <Form.Label style={{ marginLeft: '33%' }}>Upload Your Images</Form.Label>
                    <Dropzone onDrop={onDrop} accept="image/*">
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <div className="justify-content-center">
                                        <img style={{ marginLeft: '12%' }} src={dropZoneLine} />
                                        <div className="drop-wrapper">
                                            <small style={{ marginLeft: '28%' }}>Drag and Drop your Files or.</small>
                                            <button type="button" onClick={open} style={{ marginLeft: '33%' }}>
                                                Browse Your File
                                            </button>
                                        </div>
                                    </div>
                                    <input {...getInputProps()} />
                                </div>
                                <aside>
                                    {imagePreview.length > 0 ? (
                                        <div>
                                            <h4>Files</h4>
                                            <ul>
                                                <li>
                                                    {files} <span>{progress} %</span>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : formDatas.profile_images != '' ? (
                                        <div>
                                            <h4>Files</h4>
                                            <ul>
                                                <li>{formDatas.profile_images}</li>
                                            </ul>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </aside>
                            </section>
                        )}
                    </Dropzone>
                </Form.Group>

                <div className="d-flex flex-column col-lg-4 mx-auto">
                    <Button onClick={nextSubmit} type="submit">
                        Next
                    </Button>
                    <Button onClick={previousSubmit} className="mt-1" type="submit">
                        Back
                    </Button>
                </div>
                <smal style={{ fontSize: '13px', marginBottom: '15px' }}>
                    Make sure you uploaded right images, after next step you can't go back
                </smal>
            </Form>
        </Paper>
    );
};

export default FormThree;
