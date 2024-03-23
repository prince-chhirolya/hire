"use client"
import React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Navbar from "../Components/Navbar"
  
  const invoices = [
    {
      invoice: "Cont_3",
      paymentStatus: "78",
      totalAmount: "efg",
      paymentMethod: "Bank Transfer",

    },
  ]
  
export default  function leaderboard() {
    return (
        <>
        <Navbar/>
      <Table className="w-[80rem] m-auto">
        <TableHeader>
          <TableRow className="border-[#454547] hover:bg-[#18181a]">
            <TableHead className="w-[100px] text-[#9c9ca4]">Contributer</TableHead>
            <TableHead className='text-[#9c9ca4]'>Commits</TableHead>
            <TableHead className='text-[#9c9ca4]'>Organizations</TableHead>
            <TableHead className='text-[#9c9ca4]'>Issues Opened</TableHead>
            <TableHead className='text-[#9c9ca4]'>Pull Requests</TableHead>
            <TableHead className='text-[#9c9ca4]'>PR Reviews</TableHead>
            <TableHead className='text-[#9c9ca4]'>Community Engagement</TableHead>
            <TableHead className="text-right text-[#9c9ca4]">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow className="border-[#343436] hover:bg-[#18181a]" key={invoice.invoice}>
              <TableCell className="font-medium text-white">{invoice.invoice}</TableCell>
              <TableCell  className="text-white">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-white">{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right text-white">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>
    )
  }
  