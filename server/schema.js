const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    layers: [Layer]!
    layer(id: ID!): Layer
  }

  type Layer {
    id: ID
    name: String
    objects: Objects
    services: [Service]
  }
  type Service {
    service: String
    options: OptionType
  }

  type OptionType {
    draw: DrawType
    edit: EditType
  }

  type DrawType {
    polyline: PolylineType
    polygon: PolygonType
    rectangle: Boolean
    circle: Boolean
    marker: Boolean
    circlemarker: Boolean
  }
  type PolylineType {
    shapeOptions: JSON
    showLength: Boolean
  }
  type ShapeOptionsType {
    color: String
  }
  type PolygonType {
    shapeOptions: JSON
  }
  type EditType {
    edit: Boolean
  }

  type Objects {
    endpoint: String
    types: [TypesItem]
  }
  type TypesItem {
    id: String
    format: JSON
  }

  type Mutation {
    changeLayer(layer: JSON): Layer
  }

  type Subscription {
    layerChanged: Layer
  }
`;

module.exports = typeDefs;
