import React from 'react'
import BrewerList from './BrewerList';
import Loading from './Loading';
import MyPaper from './MyPaper';

class BeerList extends React.Component {
    state = {
        isLoadingBeerList: false,
        beerList: null,
        default: 'Please wait',
        secondBeerList: [{ "product_id": 127031, "name": "Mad Jack Mixer", "size": "12  ×  Can 355 ml", "price": "23.95", "beer_id": 127, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/18636-MJ-Family-Can-TBS-322x344.jpg?itok=v_mQRmR1", "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 128038, "name": "Mad Jack Hard Root Beer", "size": "6  ×  Can 473 ml", "price": "15.25", "beer_id": 128, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/18636-MJ-Rootbeer-Can-TBS-322x344.jpg?itok=0QzZqG0m", "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 131041, "name": "Keystone Ice", "size": "24  ×  Can 473 ml", "price": "49.65", "beer_id": 131, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/brand/hero/Key_ICE_355mL.jpg?itok=UDkvF6Rl", "category": "Value", "abv": "5.5", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 133038, "name": "Mad Jack", "size": "6  ×  Can 473 ml", "price": "15.25", "beer_id": 133, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/MADJACK%20ARRAY.JPG?itok=WRxg2cIL", "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Malt", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 136042, "name": "Rickards Radler", "size": "12  ×  Can 473 ml", "price": "29.95", "beer_id": 136, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/RICRA_473ml_Draught_3D.JPG?itok=UQnejN62", "category": "Domestic Specialty", "abv": "3.2", "style": "N/A", "attributes": "N/A", "type": "Malt", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 137002, "name": "Belgian Moon", "size": "12  ×  Bottle 341 ml", "price": "25.50", "beer_id": 137, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/0137%20H.png?itok=vlz26ov4", "category": "Domestic Specialty", "abv": "5.4", "style": "N/A", "attributes": "N/A", "type": "Ale", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 138038, "name": "Rickards IPA", "size": "6  ×  Can 473 ml", "price": "14.95", "beer_id": 138, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/TBS_Glassware%20Pairing_RICRDIPA.jpg?itok=nn7ROlTI", "category": "Domestic Specialty", "abv": "5.7", "style": "N/A", "attributes": "N/A", "type": "Ale", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 140038, "name": "Mad Jack Hard Core Apple", "size": "6  ×  Can 473 ml", "price": "15.75", "beer_id": 140, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/0140H_0.png?itok=z5KnoyWv", "category": "Domestic Specialty", "abv": "7.0", "style": "N/A", "attributes": "N/A", "type": "Malt", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 141004, "name": "Mad Jack Suckerpunch", "size": "1  ×  Can 473 ml", "price": "2.85", "beer_id": 141, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/0141H_0.png?itok=jv0EtFIo", "category": "Domestic Specialty", "abv": "7.0", "style": "N/A", "attributes": "N/A", "type": "Flavoured Malt", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 142042, "name": "Mad Jack Ginger Lager", "size": "12  ×  Can 473 ml", "price": "28.95", "beer_id": 142, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/0142H.png?itok=60g46Dsp", "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Flavoured Malt", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 151156, "name": "Black Label", "size": "8  ×  Can 473 ml", "price": "15.95", "beer_id": 151, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/18531%20BlackLabel%20CanBottlePint%20TBS%20322x344.jpg?itok=t_PKNvSw", "category": "Value", "abv": "4.7", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false }, { "product_id": 154280, "name": "Black Ice", "size": "6  ×  Can 710 ml", "price": "18.95", "beer_id": 154, "image_url": "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/brand/0154.jpg?itok=Lpo4CnBP", "category": "Premium", "abv": "6.1", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false }]
    }

    componentDidMount() {
        this.setState({
            isLoadingBeerList: true
        })
        fetch("https://cors.io/?http://ontariobeerapi.ca/beers/")
            .then(response => response.json())
            .then(dataFromResponse =>
                this.setState({
                    beerList: JSON.stringify(dataFromResponse)
                })

            )
        this.setState({
            isLoadingBeerList: false,
        })
    }

    render() {
        const styles = {
            container: {
                display: 'flex',
                backgroundColor: 'lightBlue'
            },
            column: {
                marginLeft: '10px',
                width: '30%',
                height: '200px',
                backgroundColor: 'indygo'
            }
        }
        const mapedData = this.state.secondBeerList.map(el => el.name)
        console.log(this.state.beerList)
        
        return (
            <MyPaper>

                {this.state.isLoadingBeerList ?
                    <Loading />
                    :

                    <BrewerList
                        beerList={this.state.beerList}
                        breweList={this.beersList}
                    />
                }
                <div
                    style={styles.container}
                >
                    <div style={styles.column} className="left-container" >
                        test left
                    </div>
                    <div style={styles.column} className="center-container" >test center</div>
                    <div style={styles.column} className="rigth-container" >test right</div>

                </div>

            </MyPaper>
        )
    }
}

export default BeerList