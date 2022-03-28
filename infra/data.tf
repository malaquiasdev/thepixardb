data "archive_file" "this" {
  output_path = "files/${var.project_name}-${var.project_name_suffix}.zip"
  type        = "zip"
  source_dir  = "../build"
}
