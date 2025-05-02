"use client";
import React from "react";
import Image from "next/image";
import user from "@/assets/icons/user.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ProfilePage = () => {
    const orders = useSelector((state: RootState) => state.orders.list);

    return (
        <div className="max-w-3xl mx-auto mt-12 mb-12 px-6 py-8 bg-white shadow-lg rounded-2xl">
            <div className="flex items-center gap-5 border-b pb-6 mb-6">
                <Image src={user} alt="user" width={64} height={64} />
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Foydalanuvchi Profil
                    </h2>
                    <p className="text-gray-600 text-sm">muxsimov@gmail.com</p>
                </div>
            </div>

            <section className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Shaxsiy ma'lumotlar
                </h3>
                <ul className="space-y-1 text-gray-700">
                    <li><strong>Ism:</strong> Asadbek</li>
                    <li><strong>Email:</strong> muxsimov@gmail.com</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Xaridlar tarixi
                </h3>

                {orders.length === 0 ? (
                    <p className="text-gray-600">
                        Hech qanday xarid qilinmagan.
                    </p>
                ) : (
                    <ul className="space-y-6">
                        {orders.map((order) => (
                            <li
                                key={order.id}
                                className="flex items-center gap-5 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg border">
                                    <Image
                                        src={order.imageUrl}
                                        alt={order.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-800">{order.name}</h4>
                                    <p className="text-blue-600 font-semibold">${order.price}</p>
                                    <p className="text-sm text-gray-500 mt-1">Buyurtma ID: #{order.id}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default ProfilePage;
