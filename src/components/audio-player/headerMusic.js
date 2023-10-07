import ebi from './../../Data/music-file/Ebi Akharin Ahang.mp3'
import majid from './../../Data/music-file/negine-ghalbami.mp3'
import shervin from './../../Data/music-file/Shervin Hajipour - Hasood.mp3'
import ebiPic from './../../Data/music-file/ebiPic.jpg'
import majidPic from './../../Data/music-file/majidPic.jpg'
import shervinPic from './../../Data/music-file/shervinPic.jpg'


export const musicList = [
    {
        id: 0,
        artist: 'Ebi',
        music: ebi,
        title: 'Akharin Bar',
        imageCover: ebiPic
    },
    {
        id: 1,
        artist: 'Majid razavi',
        music: majid,
        title: 'Negine',
        imageCover: majidPic
    },
    {
        id: 2,
        artist: 'Shervin',
        music: shervin,
        title: 'Hasood',
        imageCover: shervinPic 
    },
];