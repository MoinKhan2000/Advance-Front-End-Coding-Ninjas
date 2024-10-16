import React, { useEffect } from 'react';

function MusicMenu({ musicMenuItems, activeItem }) {
    useEffect(() => {
        // Add active class to a particular option
        const menuItems = document.querySelectorAll('#music-menu tr');
        for (let item of menuItems) {
            if (item.getAttribute('data-option') === activeItem) {
                item.classList.add('active');
            }
        }
    });
    return (
        <table id="music-menu">
            <tbody>
                <tr>
                    <th className="table-heading">Music <i className="fas fa-music"></i></th>
                </tr>
                {musicMenuItems?.map((item, index) => (
                    <tr key={index} data-option={item} className={activeItem === index ? 'active' : ''}>
                        <td className="table-item">{item}<i className="fas fa-chevron-right"></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MusicMenu;
