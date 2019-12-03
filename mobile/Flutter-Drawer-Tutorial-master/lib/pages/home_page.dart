import 'package:flutter/material.dart';

import './page.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => new _HomePageState();
}

class _HomePageState extends State<HomePage> {

  String currentProfilePic = "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg";


  void switchAccounts() {
    String picBackup = currentProfilePic;
    this.setState(() {
      currentProfilePic = picBackup;
    });
  }
  var bannerItems = ["Lviv Croasants", "Chelentano"];
  var bannerImage = [
    "images/burger.jpg",
    "images/cheesechilly.jpg",
  ];
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(title: new Text("                 EASYREST"),

            backgroundColor:
            Colors.orange,actions: <Widget>[
              IconButton(icon: Icon
                (Icons.search), onPressed: () {
                showSearch(context:
                context, delegate: DataSearch());
              })]),
        drawer: new Drawer(
          child: new ListView(
            children: <Widget>[
              new UserAccountsDrawerHeader(
                accountEmail: new Text("crazykfox@gmail.com"),
                accountName: new Text("CrazyFox"),
                currentAccountPicture: new GestureDetector(
                  child: new CircleAvatar(
                    backgroundImage: new NetworkImage(currentProfilePic),
                  ),
                  onTap: () => print("This is your current account."),
                ),

                decoration: new BoxDecoration(
                    image: new DecorationImage(
                        image: new NetworkImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNfhNgL1gfavCPKnQNg9bFXuxUP3y9fO_NnFBMTaxP6ciXt8sQA&s"),
                        fit: BoxFit.fill
                    )
                ),
              ),
              new ListTile(
                  title: new Text("Restaurants"),
                  trailing: new Icon(Icons.arrow_upward),
                  onTap: () {
                    Navigator.of(context).pop();
                    Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) =>
                    new Page("Restaurants")));
                  }
              ),
              new ListTile(
                  title: new Text("Setting"),
                  trailing: new Icon(Icons.arrow_right),
                  onTap: () {
                    Navigator.of(context).pop();
                    Navigator.of(context).push(new MaterialPageRoute(builder: (BuildContext context) =>
                    new Page("Setting")));
                  }
              ),
              new Divider(),
              new ListTile(
                title: new Text("Cancel"),
                trailing: new Icon(Icons.cancel),
                onTap: () => Navigator.pop(context),
              ),
            ],
          ),
        ),
        body: new Center(
          child: new Text("EASYREST", style: new TextStyle(fontSize: 35.0)),
        )
    );
  }
}

class DataSearch extends SearchDelegate<String>{
  final food = [
    "Lviv Croassants",
    "Chelentano"
  ];
  final recentfood = [];
  @override
  List<Widget> buildActions(BuildContext context){
    return[
      IconButton(
          icon: Icon(Icons.clear),
          onPressed:() {
            query = "";
          })];
  }

  @override
  Widget buildLeading(BuildContext context){
    return IconButton(
        icon: AnimatedIcon(
          icon: AnimatedIcons.menu_arrow,
          progress: transitionAnimation,),
        onPressed: () {
          close(context, null);
        });
  }
  @override
  Widget buildResults(BuildContext context) {
    return Card(
      color: Colors.orange,
      shape: StadiumBorder(),
      child: Center(
        child: Text(query),
      ),
    );
  }
  @override
  Widget buildSuggestions(BuildContext context){
    final suggestionList = query.isEmpty ?
    recentfood :
    food.where((p)=>p.startsWith(query)).toList();
    return ListView.builder(
      itemBuilder: (context, index) => ListTile(
        onTap: (){
          showResults(context);
        },
        leading: Icon(Icons.location_city),
        title: RichText(text: TextSpan(
            text: suggestionList[index].substring(0, query.length),
            style: TextStyle(
                color: Colors.black, fontWeight: FontWeight.bold),
            children: [TextSpan(
                text:  suggestionList[index].substring(query.length),
                style: TextStyle(color: Colors.grey)
            )]
        ),
        ),
      ),
      itemCount: suggestionList.length,
    );
  }
}


