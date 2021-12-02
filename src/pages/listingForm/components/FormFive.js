import Paper from '../../../components/Paper/index';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { previousStep, handleFormJobImages, handleTokenDatas } from '../../../store/formStepSlice';
import Dropzone, { useDropzone } from 'react-dropzone';
import dropZoneLine from '../../../assets/RectUpload.png';
import { storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

// graphql things
import { postDataUser } from '../../../query/query';
import { useMutation } from '@apollo/client';

// token things
import TokenGenerator from 'uuid-token-generator';

import { ToastContainer, toast } from 'react-toastify';

const FormFive = () => {
    let navigate = useNavigate();
    const [viewError, setError] = useState(false);
    const [finishUpload, setFinishUpload] = useState(true);

    const [imagePreviewJob, setImagePreviewJob] = useState({ files: '' });
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    let formDatas = useSelector((state) => state.formStep.formValue);

    // graphql things
    const [inputDataList, { data, loading, error }] = useMutation(postDataUser);

    // token things
    const tokgen = new TokenGenerator();
    const token = tokgen.generate();

    const submitEvent = (e) => {
        if (imagePreviewJob.files == '') {
            setError(true);
            return false;
        }
        e.preventDefault();
        dispatch(handleTokenDatas(token));
        inputDataList({
            variables: {
                object: {
                    full_name: formDatas.full_name,
                    education: formDatas.education,
                    email: formDatas.email,
                    phone: formDatas.phone,
                    tell_yourself: formDatas.tell_your_self,
                    profile_image: formDatas.profile_images,
                    job: formDatas.what_you_do,
                    pricing: formDatas.pricing,
                    eta: formDatas.ETA,
                    short_description: formDatas.short_description,
                    job_images: formDatas.job_images,
                    token: token,
                },
            },
        }).then(() => {
            setError(false);
            navigate(`/thank-page`);
        });
    };

    useEffect(() => {
        if (formDatas != '') {
            setImagePreviewJob({ files: formDatas.job_images });
        }
    }, []);

    // ondrop uplaod it to firebase, and set link to input !
    const onDrop = (files) => {
        const storageRef = ref(storage, `images/${files[0]?.name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);
        setError(false);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('test upload job', downloadURL);
                    dispatch(handleFormJobImages(downloadURL));
                    setFinishUpload(false);
                });
            }
        );
        setImagePreviewJob(files);
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

    const files = <li key={imagePreviewJob[0]?.name}>{imagePreviewJob[0]?.name}</li>;
    const customId = 'no-duplicate';

    toast.error('Ada field yang kosong', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: customId,
    });
    return (
        <>
            {viewError ? (
                <div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <Paper className="rounded-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>UPLOAD YOUR JOB IMAGES</Form.Label>
                                <Dropzone onDrop={onDrop} accept="image/*">
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <div className="justify-content-center">
                                                    <img style={{ marginLeft: '12%' }} src={dropZoneLine} />
                                                    <div className="drop-wrapper">
                                                        <small style={{ marginLeft: '28%' }}>
                                                            Drag and Drop your Files or.
                                                        </small>
                                                        <button
                                                            type="button"
                                                            onClick={open}
                                                            style={{ marginLeft: '33%' }}
                                                        >
                                                            Browse Your File
                                                        </button>
                                                    </div>
                                                </div>
                                                <input {...getInputProps()} />
                                            </div>
                                            <aside>
                                                {imagePreviewJob.length > 0 ? (
                                                    <div>
                                                        <h4>Files</h4>
                                                        <ul>
                                                            <li>
                                                                {files} <span>{progress} %</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ) : formDatas.job_images != '' ? (
                                                    <div>
                                                        <h4>Files</h4>
                                                        <ul>
                                                            <li>{formDatas.job_images}</li>
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
                                <Button onClick={submitEvent} type="submit" disabled={finishUpload}>
                                    Submit
                                </Button>
                                <Button onClick={previousSubmit} className="mt-1" type="submit">
                                    Back
                                </Button>
                                <small>{loading ? 'Progress uploading to hashura' : ''}</small>
                            </div>
                        </Form>
                    </Paper>
                </div>
            ) : (
                <Paper className="rounded-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>UPLOAD YOUR JOB IMAGES</Form.Label>
                            <Dropzone onDrop={onDrop} accept="image/*">
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div {...getRootProps()}>
                                            <div className="justify-content-center">
                                                <img style={{ marginLeft: '12%' }} src={dropZoneLine} />
                                                <div className="drop-wrapper">
                                                    <small style={{ marginLeft: '28%' }}>
                                                        Drag and Drop your Files or.
                                                    </small>
                                                    <button type="button" onClick={open} style={{ marginLeft: '33%' }}>
                                                        Browse Your File
                                                    </button>
                                                </div>
                                            </div>
                                            <input {...getInputProps()} />
                                        </div>
                                        <aside>
                                            {imagePreviewJob.length > 0 ? (
                                                <div>
                                                    <h4>Files</h4>
                                                    <ul>
                                                        <li>
                                                            {files} <span>{progress} %</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            ) : formDatas.job_images != '' ? (
                                                <div>
                                                    <h4>Files</h4>
                                                    <ul>
                                                        <li>{formDatas.job_images}</li>
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
                            <Button onClick={submitEvent} type="submit" disabled={finishUpload}>
                                Submit
                            </Button>
                            <Button onClick={previousSubmit} className="mt-1" type="submit">
                                Back
                            </Button>
                            <small>{loading ? 'Progress uploading to hashura' : ''}</small>
                        </div>
                    </Form>
                </Paper>
            )}
        </>
    );
};

export default FormFive;
