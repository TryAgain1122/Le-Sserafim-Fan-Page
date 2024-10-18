type Category = 'all' | 'yunjin' | 'chaewoon' | 'sakura' | 'eunchae' | 'kazuha'; 

interface HeaderGalleryProps {
  onSelectCategory: (category: Category) => void;
}

const HeaderGallery = ({onSelectCategory}:HeaderGalleryProps) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto overflow-x-auto p-4 scrollbar-hide">
        <div className="grid grid-cols-6 min-w-[1230px] gap-4">
        <div className="flex items-center md:justify-start justify-center min-w-[118px] bg-[#87F9CF] px-4 py-2 rounded-full gap-1"
          onClick={() => onSelectCategory('all')}
        >
            <button className="font-semibold font-poppins text-sm tracking-wide text-center">All</button>
          </div>
          
          <div className="flex items-center md:justify-start justify-center min-w-[118px] bg-[#87F9CF] px-4 py-2 rounded-full gap-1"
            onClick={() => onSelectCategory('yunjin')}
          >
            <img src="/assets/yunjin5.jpg" alt="Image" className="h-[45px] w-[45px] rounded-full object-cover md:block hidden" />
            <button className="font-semibold font-poppins text-sm tracking-wide text-center">YUNJIN</button>
          </div>
          <div className="flex items-center md:justify-start justify-center min-w-[118px] bg-[#F9FF8B] px-4 py-2 rounded-full gap-0 md:gap-1"
            onClick={() => onSelectCategory('chaewoon')}
          >
            <img src="/assets/chaewoon4.jpg" alt="Image" className="h-[45px] w-[45px] rounded-full object-cover md:block hidden" />
            <button className="font-semibold font-poppins text-sm tracking-wide text-center">Chaewoon</button>
          </div>
          <div className="flex items-center md:justify-start justify-center min-w-[118px] bg-[#FF96B7] px-4 py-2 rounded-full gap-0 md:gap-1"
            onClick={() => onSelectCategory('sakura')}
          >
            <img src="/assets/Sakura.jpg" alt="Image" className="h-[45px] w-[45px] rounded-full object-cover md:block hidden" />
            <button className="font-semibold font-poppins text-sm tracking-wide text-center">Sakura</button>
          </div>
          <div className="flex items-center md:justify-start justify-center min-w-[118px] bg-[#96B7FF] px-4 py-2 rounded-full gap-0 md:gap-1"
            onClick={() => onSelectCategory('eunchae')}
          >
            <img src="/assets/eunchae2.jpg" alt="Image" className="h-[45px] w-[45px] rounded-full object-cover md:block hidden" />
            <button className="font-semibold font-poppins text-sm tracking-wide text-center">Eunchae</button>
          </div>
          <div className="flex items-center min-w-[118px] md:justify-start justify-center bg-[#BE96FF] px-4 py-2 rounded-full gap-0 md:gap-1"
            onClick={() => onSelectCategory('kazuha')}
          >
            <img src="/assets/kazuhaB1.jpg" alt="Image" className="h-[45px] w-[45px] rounded-full object-cover md:block hidden" />
            <button className="font-semibold font-poppins text-sm tracking-wide text-center">Kazuha</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderGallery;
