import React from "react";

function ShimmerUI() {
    return (
        <div className="w-full flex flex-col gap-2 loader">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    key={index}
                    className="h-5 rounded-custom bg-gradient-to-r from-blue-300 via-purple-400 to-blue-200 bg-size-custom animate-loader"
                ></div>
            ))}
        </div>
    );
}

export default ShimmerUI;
