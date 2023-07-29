package models

import play.api.libs.json._

case class Book(isbn: String, title: String, appendixPage: Int)

object Book {
  implicit val format: Format[Book] = Json.format[Book]
}
