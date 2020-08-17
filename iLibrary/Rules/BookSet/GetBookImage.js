export default function GetBookImage(formCellControlProxy) {
  //The following currentCustomer will retrieve the current customer record
    //const currentCustomer = sectionProxy.getPageProxy().binding.CustomerId;
    //const currentBook = formCellControlProxy.

  //The following expression will retrieve the total count of the orders for a given customer
	//return sectionProxy.count('/DemoSampleApp/Services/SampleServiceV2.service', 'SalesOrderHeaders', `$filter=CustomerId eq '${currentCustomer}'`).then((count) => {
      //  return count;
    //});
    
    
    //const imgAdd = "https://img.zcool.cn/community/014f8558d0d6eda801219c77a488c3.jpg@1280w_"+"{BookID}"+"l_2o_100sh.jpg";
    const imgAdd = `https://ic-cf-2020-team-303-imagestorage-approuter.cfapps.eu10.hana.ondemand.com/nsHTML5Module/resources/{BookID}.jpg`;
    return imgAdd;
}