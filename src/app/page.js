'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  theme,
  Hero,
  Features,
  ListFeatures,
  GridImages,
} from 'ecommerce-mxtech';
import { MdArchitecture } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';

const { useToken } = theme;

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  return (
    <main
      style={{
        backgroundColor: '#CBDCFF',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          images={[dataSite.image_hero, dataSite.image_hero2]}
          withSubView
          variant='carousel'
          stylesContainerImage={{
            height: '85vh',
          }}
          styleImage={{
            height: '85vh',
          }}
          title={dataSite.subtitle}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withShadowText
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div>
          <GridImages
            stylesContainer={{
              height: 500,
            }}
            src={dataSite.products.map((product) => product.image)}
          />
        </div>
        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='Our courses'
              gridColumns={3}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              stylesItem={{
                borderRadius: 10,
              }}
              titleFilter={null}
              productVersion='2'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              backgroundItemColor='#EDEDED'
              selectedCategory={dataSite.categories[0]}
            />
          )}
        </div>

        <div className='flex flex-col' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            backgroundColor='#F1D8BF'
            variant='text'
          />
        </div>

        <div id='products'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={true}
              title='All Courses'
              gridColumns={3}
              variant='grid'
              productsPerPage={1}
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='2'
              carouselOptions={{
                backgroundColor: 'transparent',
              }}
              stylesItem={{
                borderRadius: 10,
              }}
              backgroundItemColor='#F8F8F8'
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='text'
            variant='carousel'
            backgroundColor='#F1D8BF'
            references={dataSite.references}
            gridColumns={3}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
