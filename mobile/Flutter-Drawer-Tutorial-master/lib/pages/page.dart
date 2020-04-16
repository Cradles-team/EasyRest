import 'package:flutter/material.dart';

class Page extends StatelessWidget {

  final String title;

  Page(this.title);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(title: new Text(title), backgroundColor: Colors.orange,),
      body: new Center(
        child: new Text(title),
      ),
    );
  }
}


class Home extends StatefulBuilder {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: ListView(
            padding: EdgeInsets.only(top: 50.0, left: 20.0, right: 20.0),
            children: <Widget>[
              FoodCategory(),
              SizedBox(
                height: 20.0,
              ),
              SizedBox(
                height: 20.0,
              ),
            ])
    );
  }
}

class FoodCategory extends StatelessWidget{

  @override
  Widget build(BuildContext context){
    return Container(
      height: 5.0,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemBuilder: (BuildContext context, int index){


        },
      ),
    );
  }
}