"use client";

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';

function AddNewStudent({ refreshData }) {
    const [open, setOpen] = useState(false);
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        GetAllGradesList();
    }, []);

    const GetAllGradesList = () => {
        GlobalApi.GetAllGrades().then(resp => {
            setGrades(resp.data);
        });
    };

    const onSubmit = (data) => {
        setLoading(true);
        GlobalApi.CreateNewStudent(data).then(resp => {
            if (resp.data) {
                reset();
                refreshData();
                setOpen(false);
                toast('New Student Added!');
            }
            setLoading(false);
        });
    };

    return (
        <div>
            <Button onClick={() => setOpen(true)} className='bg-white text-black hover:bg-gray-200'>
                + Add New Student
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='bg-black text-white'>
                    <DialogHeader>
                        <DialogTitle className='text-white'>Add New Student</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='py-2'>
                                    <label className='block text-sm font-medium'>Full Name</label>
                                    <Input
                                        className='mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white'
                                        placeholder='Ex. John Carry'
                                        {...register('name', { required: 'Full Name is required' })}
                                    />
                                    {errors.name && <p className='text-red-400 text-sm'>{errors.name.message}</p>}
                                </div>
                                <div className='py-2'>
                                    <label className='block text-sm font-medium'>Select Grade</label>
                                    <select
                                        className='mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white'
                                        {...register('grade', { required: 'Grade is required' })}
                                    >
                                        {grades.map((item, index) => (
                                            <option key={index} value={item.grade}>{item.grade}</option>
                                        ))}
                                    </select>
                                    {errors.grade && <p className='text-red-400 text-sm'>{errors.grade.message}</p>}
                                </div>
                                <div className='py-2'>
                                    <label className='block text-sm font-medium'>Contact Number</label>
                                    <Input
                                        className='mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white'
                                        type="number"
                                        placeholder='Ex. 9876543210'
                                        {...register('contact')}
                                    />
                                </div>
                                <div className='py-2'>
                                    <label className='block text-sm font-medium'>Address</label>
                                    <Input
                                        className='mt-1 p-2 border border-gray-600 rounded-lg bg-gray-800 text-white'
                                        placeholder='Ex. 525 N Tryon Street, NC'
                                        {...register('address')}
                                    />
                                </div>

                                <div className='flex gap-3 items-center justify-end mt-5'>
                                    <Button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        variant="ghost"
                                        className='bg-gray-700 text-white hover:bg-gray-600'
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className={`bg-white text-black hover:bg-gray-200 ${loading ? 'opacity-70' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? <LoaderIcon className='animate-spin h-5 w-5' /> : 'Save'}
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewStudent;
