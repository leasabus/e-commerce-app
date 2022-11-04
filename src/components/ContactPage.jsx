import React, { useState } from 'react'
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactPage = () => {
    const [message, setMessage] = useState(false);


    const notify = () => toast.success("Form submitted. Thank you!", {
        position: "top-right",
        theme: "colored",
    });


    return (
        <>
            <h1 className='text-white flex justify-center text-center text-3xl p-6 '>Contact Us</h1>

            {/* initial values: indica los valores iniciales del form */}
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    correo: '',
                    telefono: '',
                    mensaje: ''

                }}

                validate={(valores) => {
                    let errores = {};
                    //validacion del nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor completa este campo'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo debe contener letras y espacios'
                    }
                    //validacion del apellido
                    if (!valores.apellido) {
                        errores.apellido = 'Por favor completa este campo'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                        errores.apellido = 'El apellido solo debe contener letras y espacios'
                    }
                    //validacion de correo
                    if (!valores.correo) {
                        errores.correo = 'Por favor ingresa tu correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El correo solo puede conter guiones,letras,numeros,puntos y guion bajo'
                    }

                    if (!valores.telefono) {
                        errores.telefono = 'Por favor ingresa tu móvil'
                    } else if (!/^[0-9]*$/.test(valores.telefono)) {
                        errores.telefono = 'Solo debe contener numeros sin espacios'
                    }
                    return errores;
                }
                }

                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log(valores)
                    setMessage(true)
                    notify()
                    setTimeout(() => {
                        setMessage(false)
                    }, 5000);

                }}>

                {/* de todas las props de formik desestructuramos en handlesubmit y lo asignamos */}
                {/* values accede a todas los valores de cada campo*/}
                {/* handlechange nos permite cambiar los valores del input*/}
                {/* handleBlur sirve para q cuando el usuario hace click fuera del campo se valide el campo*/}
                {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
                    <form className='flex flex-col items-center justify-center align-center'
                        onSubmit={handleSubmit}>

                        <div className='flex flex-col items-center justify-center '>
                            <span className='text-green-500 text-2xl p-1 '>Name</span>
                            <input
                                className='rounded h-[35px] md:h-[50px] md:w-[450px] cursor-pointer m-2 p-2 '
                                type="text"
                                name='nombre'
                                placeholder='example : Carlos'
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur} />

                            {errors.nombre && <div className='text-red-500'>{errors.nombre}</div>}
                        </div>

                        <div className='flex flex-col items-center justify-center '>
                            <span className='text-green-500 text-2xl p-1'>Surname</span>
                            <input
                                className='rounded h-[35px] md:h-[50px] md:w-[450px] cursor-pointer m-2 p-2 '
                                type="text"
                                name='apellido'
                                placeholder='example : Rodríguez'
                                value={values.apellido}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.apellido && <div className='text-red-500'>{errors.apellido}</div>}
                        </div>

                        <div className='flex flex-col items-center justify-center '>
                            <span className='text-green-500 text-2xl p-2'>Email</span>
                            <input
                                className='rounded h-[35px] md:h-[50px] md:w-[450px] cursor-pointer m-2 p-2 '
                                type="text"
                                name='correo'
                                placeholder='example@gmail.com'
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.correo && <div className='text-red-500'>{errors.correo}</div>}
                        </div>

                        <div className='flex flex-col items-center justify-center '>
                            <span className='text-green-500 text-2xl p-1 '>Phone</span>
                            <input
                                className='rounded h-[35px] md:h-[50px] md:w-[450px] cursor-pointer m-2 p-2 '
                                type="text"
                                name='telefono'

                                placeholder='2364-547845'
                                value={values.telefono}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.telefono && <div className='text-red-500'>{errors.telefono}</div>}
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <span className='text-green-500 text-2xl p-1'>Your message</span>
                            <input
                                className='rounded h-[50px] md:h-[50px] md:w-[450px] cursor-pointer m-2 p-2 '
                                type="textarea"
                                name='mensaje'
                                value={values.mensaje}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='your message' />
                        </div>


                        <button

                            type='submit'
                            className="rounded-md w-32 px-3.5 py-2 m-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-500 ">
                            <span className="absolute max-w-65 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-green-300 transition duration-300 group-hover:text-white ease"
                            >Send</span>
                        </button>
                        <ToastContainer />
                        {message && <p className='text-green-500'>Thank your for contact us!</p>}

                    </form>
                )}
            </Formik>

        </>
    )
}
